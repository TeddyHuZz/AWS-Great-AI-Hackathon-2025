// scripts/seed_fixed.js
const AWS = require("aws-sdk");
const fs = require("fs");
const path = require("path");

// Configure AWS SDK with your profile and region
const credentials = new AWS.SharedIniFileCredentials({ profile: "kneega" });
AWS.config.credentials = credentials;
AWS.config.update({ region: "ap-southeast-5" });

// DynamoDB DocumentClient
const docClient = new AWS.DynamoDB.DocumentClient();

// Load grants.json
const grants = JSON.parse(
  fs.readFileSync(path.join(__dirname, "grants.json"), "utf8")
);

async function seed() {
  for (const grant of grants) {
    const params = {
      TableName: "SMEGrantsCatalog",
      Item: grant,
    };

    try {
      await docClient.put(params).promise();
      console.log(`✅ Inserted: ${grant.fund_id}`);
    } catch (err) {
      console.error(`❌ Failed to insert ${grant.fund_id}`, err);
    }
  }
}

seed();
