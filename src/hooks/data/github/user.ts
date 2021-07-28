import { defineAsyncData } from '../define'

export default defineAsyncData(
  async ({ github }, { username = 'vinceweel' }) => {
    try {
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
      return user
    } catch (error) {
      return new Error(error)
    }
  },
)
