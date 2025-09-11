import {usePuterStore} from "~/lib/puter";
import {useEffect} from "react";
import {useLocation, useNavigate} from "react-router";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "~/components/Animations";

export const meta = () => ([
    { title: 'Resumind | Auth' },
    { name: 'description', content: 'Log into your account' },
])

const Auth = () => {
    const { isLoading, auth } = usePuterStore();
    const location = useLocation();
    const next = location.search.split('next=')[1];
    const navigate = useNavigate();

    useEffect(() => {
        if(auth.isAuthenticated) navigate(next);
    }, [auth.isAuthenticated, next])

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
            <Navbar />

            <motion.main
                className="pt-20 min-h-screen"
                initial="initial"
                animate="animate"
                variants={staggerContainer}
            >
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <motion.div variants={fadeInUp} className="text-center mb-10">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-4 leading-tight">
                            Welcome Back
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Log in to continue your job journey with AI-powered insights
                        </p>
                    </motion.div>

                    <motion.section
                        variants={fadeInUp}
                        className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 sm:p-10 shadow-xl border border-white/30"
                    >
                        <div className="flex flex-col items-center gap-4 text-center">
                            <h2 className="text-2xl font-bold text-gray-900">Authenticate</h2>
                            <p className="text-gray-600">Use your account to get started</p>
                        </div>

                        <div className="mt-8">
                            {isLoading ? (
                                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-full font-semibold shadow-lg animate-pulse">
                                    Signing you in...
                                </button>
                            ) : (
                                <>
                                    {auth.isAuthenticated ? (
                                        <button
                                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                                            onClick={auth.signOut}
                                        >
                                            Log Out
                                        </button>
                                    ) : (
                                        <button
                                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                                            onClick={auth.signIn}
                                        >
                                            Log In
                                        </button>
                                    )}
                                </>
                            )}
                        </div>
                    </motion.section>
                </div>
            </motion.main>

            <Footer />
        </div>
    )
}

export default Auth
