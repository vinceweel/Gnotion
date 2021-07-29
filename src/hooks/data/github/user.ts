import { defineAsyncData } from '../define'

export default defineAsyncData(
  async ({ github: { graphql } }, { username = 'vinceweel' }) => {
    try {
      const { user } = await graphql(
        `
          query user($login: String!) {
            user(login: $login) {
              id
              fullname: name
              email
              description: bio
              avatar: avatarUrl
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

export const parser = ({
  id,
  avatar_url: avatar,
  login: name,
  type,
  url,
}: any): { user: User } => ({
  user: {
    id,
    avatar,
    name,
    type,
    url,
  },
})
