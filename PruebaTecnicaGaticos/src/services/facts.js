const API_RANDOM_FACT = 'https://catfact.ninja/fact'//fact
export const getRandomFact = () => {
    return fetch(API_RANDOM_FACT)
        .then(res => res.json())
        .then(data => {
            const{fact}=data
            return fact
        })
        
}