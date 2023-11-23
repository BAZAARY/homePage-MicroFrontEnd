export const getImageForHomePageWithProductIdGraphql = async (query, productId) => {
    fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query,
          variables: { productId },
        }),
      })
        .then(response => response.json())
        .then(result => {
          setImageId(result.data.getImageAIdWithProductId);
        })
        .catch(error => {
          console.error('Error:', error);
        });
}