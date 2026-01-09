import api from '@/components/plugin/axios'

class RegisterService {
  async RegisterUser(data) {
    try {
      const response = await api.post('/auth/register', data)
      return response
    } catch (error) {
      console.error('Error registering user:', error)
    }
  }
}

export default new RegisterService()
