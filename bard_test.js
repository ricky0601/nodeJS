const { BardAPI } = require('bard-api-node');

async function testAssistant() {
  try {
    const assistant = new BardAPI();

    // Set session information for authentication
    await assistant.setSession('__Secure-3PSID', 'fgis1XCBtuArbE_nrxFaeyOzky3sS0Bk7tYC_4476VdxbqeixGpPc1hLTz_IRwRZ63OSSw.'); // or '__Secure-3PSID'
    // ...
    const url = "쿠팡";
    // Send a query to Bard
    let question = url + " 사이트 주소를 알려줘";
    const response = await assistant.getBardResponse(question);
    console.log('Bard:', response.content);
    alert('Bard:', response.content);
  } catch (error) {
    console.error('Error:', error);
    
  }
}

testAssistant();