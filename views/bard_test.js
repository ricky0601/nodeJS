const { BardAPI } = require('bard-api-node');

async function testAssistant() {
  try {
    const assistant = new BardAPI();

    // Set session information for authentication
    await assistant.setSession('__Secure-3PSID', 'fgis1YNKiWr4W6KdcWtDa6Psl9Wi4wVNaeZm8FDjL1SWSymbSdH7hlU2280TI7gZbYhc7w.'); // or '__Secure-3PSID'
    // ...

    // Send a query to Bard
    let question = "오늘 날씨는 어떄?";
    const response = await assistant.getBardResponse(question);
    console.log('Bard:', response.content);
    alert('Bard:', response.content);
  } catch (error) {
    console.error('Error:', error);
    
  }
}

testAssistant();