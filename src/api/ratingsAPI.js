export async function getEstablishmentRatings(pageNum) {
    return fetch(
        `http://api.ratings.food.gov.uk/Establishments?&pageNumber=${pageNum}&pageSize=10`,
        {headers: {"x-api-version": "2"}}
        ).then(res => res.json())
}

