import { defineAsyncData } from '../define'

export default defineAsyncData(
  async ({ github }, { username = 'vinceweel' }) => {
    const { user } = await github.graphql(
      `
        query user($login: String!) {
          user(login: $login) {
            id fullname: name email discription: bio avatar: avatarUrl
          }
        }
      `,
      {
        login: username,
      },
    )
    console.log(user)

    return [null]
  },
)
