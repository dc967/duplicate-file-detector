import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { Mail, Lock, Eye, EyeOff } from 'lucide-react'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      // Abhi dummy login — baad mein API se replace hoga
      if (email === 'admin@gmail.com' && password === 'admin123') {
        login({ name: 'Admin', email }, 'dummy-token-123')
        navigate('/')
      } else {
        setError('Invalid email or password!')
      }
    } catch (err) {
      setError('Something went wrong!')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <div className="bg-white border border-gray-200 rounded-2xl p-8 w-full max-w-md shadow-sm">

        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-lg">D</span>
          </div>
          <h1 className="text-xl font-bold text-gray-800">DupliScan</h1>
          <p className="text-xs text-gray-400 mt-1">Duplicate File Detector</p>
        </div>

        {/* Title */}
        <h2 className="text-base font-semibold text-gray-800 mb-1">Welcome back!</h2>
        <p className="text-xs text-gray-400 mb-6">Login to your account to continue</p>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-500 text-xs font-medium px-4 py-3 rounded-lg mb-4">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit}>

          {/* Email */}
          <div className="mb-4">
            <label className="text-xs font-medium text-gray-600 mb-1 block">
              Email Address
            </label>
            <div className="relative">
              <Mail size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@gmail.com"
                required
                className="w-full border border-gray-200 rounded-lg pl-9 pr-3 py-2.5 text-sm outline-none focus:border-blue-400"
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="text-xs font-medium text-gray-600 mb-1 block">
              Password
            </label>
            <div className="relative">
              <Lock size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full border border-gray-200 rounded-lg pl-9 pr-9 py-2.5 text-sm outline-none focus:border-blue-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 text-white text-sm font-semibold py-2.5 rounded-lg transition-all"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>

        </form>

        {/* Hint */}
        <div className="mt-4 bg-gray-50 rounded-lg px-4 py-3 text-center">
          <p className="text-xs text-gray-400">Demo credentials</p>
          <p className="text-xs font-medium text-gray-600 mt-0.5">admin@gmail.com / admin123</p>
        </div>

      </div>

    </div>
  )
}

export default Login