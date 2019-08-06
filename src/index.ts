import Photon from '@generated/photon'

const photon = new Photon()

async function main() {

    // Open connection to database
    await photon.connect()
  
    const newUser = await photon.users.create({
      data: {
          username: "MadLad",
          email: "ruan@test.com"
      }
    })
    console.log(newUser)
  
    const allUsers = await photon.users.findMany()
    console.log(allUsers)
  
    // Close connection to database
    await photon.disconnect()
  }

main()