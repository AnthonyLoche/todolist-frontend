import api from '@/components/plugin/axios'

class LoginService  {
  async LoginUser(data) {
    try {
      const response = await api.post('/auth/login', data)
      return response.data
    } catch (error) {
      console.error('Error logging in user:', error)
    }
  }
}

export default new LoginService()
