import axios from "axios";

async function testStrapi() {
    try {
        // Test 1: Podstawowe połączenie
        console.log('Test 1: Sprawdzanie połączenia...')
        const healthCheck = await axios.get('http://localhost:1337/api/posts')

        console.log(`✅ Połączenie OK ${healthCheck.status} ${healthCheck.statusText}`)

        // Test 2: Z parametrami
        console.log('Test 2: Zapytanie z parametrami...')
        const withParams = await axios.get('http://localhost:1337/api/posts?populate=*')
        console.log('✅ Zapytanie z populate OK')
        console.log('Ilość postów:', withParams.data.data.length)

    } catch (error) {
        console.error('❌ Błąd:', {
            status: error.response?.status,
            statusText: error.response?.statusText,
            data: error.response?.data,
            message: error.message
        })
    }
}

testStrapi()