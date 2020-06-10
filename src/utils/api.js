import axios from 'axios'

const req = (method, path, body) => {
  const axiosConfig = {
    url: `${process.env.REACT_APP_BASE_URL}${path}&apiKey=${process.env.REACT_APP_API_KEY}`,
    method
  }
  if (body) axiosConfig.data = body
  return axios(axiosConfig)
}

const graphqlReq = (query, att, args) => {
  return axios({
    url: `${process.env.REACT_APP_API_DOMAIN}/graphql`,
    method: 'post',
    data: {
      query: `query{
                ${query}${args ? `(${args})` : ''}{
                    ${att}
                  }
              }`
    }
  })
}

export default {
  get: path => req('get', path),
  post: (path, body) => req('post', path, body),
  gql: (query, att, args) => graphqlReq(query, att, args)
}
