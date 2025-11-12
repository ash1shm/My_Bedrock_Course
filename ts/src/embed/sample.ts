import { BedrockRuntimeClient, InvokeModelCommand } from '@aws-sdk/client-bedrock-runtime'

const client = new BedrockRuntimeClient({ region: 'us-west-2' })

const fact = "India got independance in 1947."
const animal = "tiger"

async function main() {
    const response = await client.send(new InvokeModelCommand({
        body: JSON.stringify({ inputText: fact }),

        modelId: 'amazon.titan-embed-text-v1',
        contentType: 'application/json',
        accept: 'application/json',
    }))
    const responseBody = JSON.parse(new TextDecoder().decode(response.body));
    console.log(responseBody.embedding)
}

main();