// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { StudyDataTypes } from '@prisma/client'
import multer from 'multer'
import type { NextApiRequest, NextApiResponse } from 'next'
import { ApiRequestWithFile } from 'types/ApiRequestWithFile'
import { StudyInput, selectOptionsType } from 'types/index'
import { connect } from 'utils/api/connect'
import { getSessionFromReq } from 'utils/api/getSessionFromReq'
import { CreateFileInput, handleFileCreate } from 'utils/api/handleFileCreate'
import { handleQuery } from 'utils/api/handleQuery'
import { prisma } from 'utils/api/prisma'
import { getCombinedString } from 'utils/client/text'

const apiRoute = connect()

// Config multer to process files in memory
const uploadMiddleware = multer({
	storage: multer.memoryStorage()
})

// Middleware processing FormData to file
apiRoute.use(uploadMiddleware.single('file'))

// Get a study by ID
apiRoute.get(async (req: NextApiRequest, res: NextApiResponse) => {
	const { studyId } = req.query

	const studyQuery = async () =>
		await prisma.study.findUnique({
			where: {
				id: studyId as string
			},
			include: {
				users: {
					include: {
						user: true
					}
				},
				image: true
			}
		})

	handleQuery({
		req,
		res,
		model: 'study',
		query: studyQuery
	})
})

// Update study by ID
apiRoute.patch(async (req: ApiRequestWithFile | NextApiRequest, res: NextApiResponse) => {
	const studyId = getCombinedString(req.query.studyId)
	const session = await getSessionFromReq(req)

	// Extract body values that need transformation
	const {
		endDate,
		dataTypes: dt,
		...simpleBody
	} = req.body as Omit<StudyInput, 'coordinator' | 'dataTypes'> & {
		coordinator?: string
		dataTypes: string
	}

	const dataTypes: StudyDataTypes[] = JSON.parse(dt).map(
		(dataType: selectOptionsType) => dataType.value as StudyDataTypes
	)

	// Remove values that don't belong in the database
	delete simpleBody.coordinator

	// Upload (to cloudinary)
	let imageUpdate:
		| {
				image: CreateFileInput
		  }
		| undefined = undefined
	if ('file' in req) {
		const createImage = await handleFileCreate(req.file, session.userId)
		imageUpdate = createImage ? { image: createImage } : undefined
	}

	const studyQuery = async () =>
		prisma.study.update({
			where: {
				id: studyId
			},
			data: {
				...simpleBody,
				endDate: endDate ? new Date(endDate) : undefined,
				dataTypes,
				...imageUpdate
			}
		})

	handleQuery({
		req,
		res,
		model: 'study',
		query: studyQuery
	})
})

export default apiRoute

// Disallow body parsing, consume as stream, for file upload
export const config = {
	api: {
		bodyParser: false
	}
}
