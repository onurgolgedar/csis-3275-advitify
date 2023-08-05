import { PrismaClient } from '@prisma/client'

export function CreateResponse(success, data, message) {
    return new Response(JSON.stringify({
        success: success,
        data: data,
        message: message
    }))
}