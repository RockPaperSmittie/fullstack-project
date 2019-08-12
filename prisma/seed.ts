import Photon from '@generated/photon'
const photon = new Photon()

async function main() {

    const user1 = await photon.users.create({
        data: {
            email: 'alice@test.com',
            username: 'Alice',
            firstName: 'Alice',
            lastName: 'Dixon',
            profilePictureURL: 'myAvatar.png'
        },
    })

    const restaurant1 = await photon.restaurants.create({
        data: {
            name: "Speakeasy Saloon",
            pictureURL: "img.png",
            location: "Durbanville",
            author: {
                connect: {
                    id: user1.id
                }
            }
        }
    })

    const review1 = await photon.reviews.create({
        data: {
            rating: 2,
            description: "An average experience to say the least",
            author: {
                connect: {
                    id: user1.id
                }
            },
            restaurant: {
                connect: {
                    id: restaurant1.id
                }
            }
        }
    })





    // const user2 = await photon.users.create({
    //     data: {
    //         email: 'bob@test.com',
    //         username: 'BobbyBoy',
    //         firstName: 'Bob',
    //         lastName: 'Adriaanse',
    //         profilePictureURL: 'myAvatar2.png',
    //     },
    // })

    console.log({ user1, restaurant1, review1 })
}

main()
    .catch(e => console.error(e))
    .finally(async () => {
        await photon.disconnect()
    })
