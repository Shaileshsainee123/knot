"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, LogIn, User, ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { PiWhatsappLogoBold } from "react-icons/pi";
import * as Yup from "yup"
import { useFormik } from "formik"

const MotionButton = motion.create('button');
const MotionDiv = motion.create('div')

export default function LoginModal({ isOpen, onClose }) {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  const toggleMode = () => {
    setIsLogin(!isLogin)
    formik.resetForm()
    setError("")
  }


  const loginValidationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  })
  const signupValidationSchema = Yup.object().shape({
    fullName: Yup.string().required("Full name is required"),
    mobile: Yup.string()
      .matches(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number")
      .required("Mobile number is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  })

  const formik = useFormik({
    initialValues: {
      fullName: '',
      mobile: '',
      email: '',
      password: '',
    },
    validationSchema: isLogin ? loginValidationSchema : signupValidationSchema,
    onSubmit: (values) => {
    
      // your logic...
      setTimeout(() => {
        setIsLoading(false)

        if (values.email && values.password) {
          // Check if admin email
          const isAdmin = values.email.includes("admin")
          onClose()
          // Redirect based on role
          if (isAdmin) {
            router.push("/dashboard")
          } else {
            router.push("/")
          }
        } else {
          setError("Please fill in all fields")
        }
      }, 1000)
    },
  })

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <MotionDiv
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative bg-[#2A2A2AF2] rounded-xl border border-[#C5A572]/40 shadow-2xl max-w-md w-full p-6 max-h-[90vh] overflow-y-auto scrollbar-hide"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <MotionButton
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </MotionButton>

          {/* Header */}
          <div className="text-center mb-6 mt-4">
            <h2 className="text-2xl font-bold text-white mb-2">{isLogin ? "Welcome Back to Knot Delhi" : "Join Knot Delhi"}</h2>
            <p className="text-muted">
              {isLogin ? "Login to access your account" : "Create your account to get started"}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={formik.handleSubmit} className="space-y-4">

            {!isLogin && (
              <>
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-1">
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    value={formik.values.fullName}
                    onChange={formik.handleChange}
                    className="w-full px-3 py-2 bg-[#1E1E1E]  rounded-md text-white placeholder:text-gray-500 focus:outline-none "
                    placeholder="Enter your full name"
                  />
                  {formik.touched.fullName && formik.errors.fullName && (
                  <div
                    className="text-red-300 text-sm"
                  >
                    {formik.errors.fullName}
                  </div>)}
                </div>
              </>

            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                className="w-full px-3 py-2 bg-[#1E1E1E]  rounded-md text-white placeholder:text-gray-500 focus:outline-none "
                placeholder="your@email.com"
              />
              {formik.touched.email && formik.errors.email && (<div
                className=" text-red-300 text-sm"
              >
                {formik.errors.email}
              </div>)}
            </div>

            {!isLogin && (
              <>
                <div>
                  <label htmlFor="mobile" className="block text-sm font-medium text-gray-300 mb-1">
                    <span className="flex gap-1">  Phone Number  <PiWhatsappLogoBold className='mt-1' /> <span>(Whatsapp)</span></span>
                  </label>
                  <input
                    id="mobile"
                    name="mobile"
                    value={formik.values.mobile}
                    onChange={formik.handleChange}
                    type="text"
                    className="w-full px-3 py-2 bg-[#1E1E1E]  rounded-md text-white placeholder:text-gray-500 focus:outline-none "
                    placeholder="Enter your full name"
                  />
                   {formik.touched.mobile && formik.errors.mobile && (<div
                    className=" text-red-300 text-sm"
                  >
                    {formik.errors.mobile}
                  </div>)}
                </div>
              </>

            )}

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                className="w-full px-3 py-2 bg-[#1E1E1E]  rounded-md text-white placeholder:text-gray-500 focus:outline-none "
                placeholder="••••••••"
              />
               {formik.touched.password && formik.errors.password && (<div
                className=" text-red-300 text-sm"
              >
                {formik.errors.password}
              </div>)}
            </div>

            {isLogin && (
              <div className="flex justify-end">
                <button type="button" className="text-sm text-primary hover:text-[#C5A572/80]">
                  Forgot password?
                </button>
              </div>
            )}



            <MotionButton
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-primary hover:bg-[#C5A572/80] text-black font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : isLogin ? (
                <>
                  <LogIn className="w-5 h-5" />
                  Login
                </>
              ) : (
                <>
                  <User className="w-5 h-5" />
                  Sign Up
                </>
              )}
            </MotionButton>
          </form>

          {/* Toggle Mode */}
          <div className="mt-6 text-center">
            <p className="text-muted">{isLogin ? "Don't have an account?" : "Already have an account?"}</p>
            <button
              type="button"
              onClick={toggleMode}
              className="mt-2 text-primary hover:text-[#C5A572/80] font-medium flex items-center gap-1 justify-center mx-auto"
            >
              {isLogin ? "Create Account" : "Login Instead"}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="mt-5 pt-6 border-t border-gray-700">
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-4">Or continue with</p>
              <div className="flex space-x-4">
                <button  type="button" className="flex-1 bg-transparent border border-primary text-primary px-4 py-2 rounded-lg transition-colors duration-300">
                 Login with Google
                </button>
              </div>
            </div>
          </div>

        </MotionDiv>
      </MotionDiv>
    </AnimatePresence>
  )
}
