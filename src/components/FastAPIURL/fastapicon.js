const API_URL = 'https://catalogmicroservicedocker.onrender.com'

// export const getProductsIds = async () => {
//     try {
//         const response = await fetch(`${API_URL}/products_ids`,{
//             method: 'GET',
//             headers: {'Content-Type': 'application/json'},
//         })
//         return await response.json()
//     }catch (err) {
//         return err
//     }
// }

// export const getNameAndPriceWithProductId = async (product_id) => {
//     try {
//         const response = await fetch(`${API_URL}/name_and_price_with_id/?product_id=${product_id}`,{
//             method: 'GET',
//             headers: {'Content-Type': 'application/json'},
//         })
//         return await response.json()
//     }catch (err) {
//         return err
//     }
// }

// //returns the image id given a product id
// export const getImageForHomePageWithProductId = async (product_id) => {
//     try {
//         const response = await fetch(`${API_URL}/image_with_product_id/?product_id=${product_id}`,{
//             method: 'GET',
//             headers: {'Content-Type': 'application/json'},
//         })
//         return await response.json()
//     }catch (err) {
//         return err
//     }
// }

export const getAPIFastAPIURL = () => {
    return API_URL
}