const { BardAPI } = require('bard-api-node');

async function testAssistant() {
  try {
    const assistant = new BardAPI();

    // Set session information for authentication
    await assistant.setSession('__Secure-3PSID', 'fgis1YNKiWr4W6KdcWtDa6Psl9Wi4wVNaeZm8FDjL1SWSymbSdH7hlU2280TI7gZbYhc7w.'); // or '__Secure-3PSID'
    // ...

    // Send a query to Bard
    const response = await assistant.getBardResponse('이미지도 분석해줄수 있어?');
    console.log('Bard:', response.content);
  } catch (error) {
    console.error('Error:', error);
    
  }
}

testAssistant();