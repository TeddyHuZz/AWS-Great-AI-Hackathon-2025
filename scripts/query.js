// scripts/query.js
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand } from "@aws-sdk/lib-dynamodb";
import { fromIni } from "@aws-sdk/credential-provider-ini";

// 1. Create DynamoDB client with profile
const client = new DynamoDBClient({
  region: "ap-southeast-5", // <-- update if needed
  credentials: fromIni({ profile: "kneega" }) // ✅ proper way to use AWS profile
});

const docClient = DynamoDBDocumentClient.from(client);

// 2. Function to fetch a grant by fund_id
async function queryGrant(fund_id) {
  try {
    const command = new GetCommand({
      TableName: "SMEGrantsCatalog",
      Key: { fund_id: fund_id }
    });

    const response = await docClient.send(command);

    if (!response.Item) {
      console.log(`❌ No item found for fund_id: ${fund_id}`);
    } else {
      console.log("✅ Grant found:");
      console.log(JSON.stringify(response.Item, null, 2));
    }
  } catch (err) {
    console.error("Error querying DynamoDB:", err);
  }
}

// 3. Run with test fund_id
const testFundId = process.argv[2] || "cradle_cip_spark"; 
queryGrant(testFundId);
