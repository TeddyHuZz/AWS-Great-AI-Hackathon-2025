
const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, BatchWriteCommand } = require("@aws-sdk/lib-dynamodb");
const fs = require("fs");

const REGION = process.env.AWS_REGION || "ap-southeast-5";
const client = new DynamoDBClient({ region: REGION });
const ddb = DynamoDBDocumentClient.from(client);

async function seed() {
  const data = JSON.parse(fs.readFileSync(__dirname + "/grants.json", "utf8"));
  // DynamoDB batchWrite supports max 25 items per batch
  const batches = [];
  for (let i = 0; i < data.length; i += 25) batches.push(data.slice(i, i + 25));

  for (const batch of batches) {
    const requestItems = {
      SMEGrantsCatalog: batch.map(item => ({ PutRequest: { Item: item } }))
    };
    try {
      const res = await ddb.send(new BatchWriteCommand({ RequestItems: requestItems }));
      console.log("Batch written:", res);
    } catch (err) {
      console.error("Batch error", err);
    }
  }
}

seed();
