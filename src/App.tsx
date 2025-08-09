import React, { useState } from 'react';
import { 
  Download, 
  Heart, 
  Star, 
  Send, 
  Play, 
  Pause, 
  ShoppingCart, 
  User, 
  Settings,
  ArrowRight,
  Plus,
  Trash2,
  Edit,
  Save
} from 'lucide-react';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [liked, setLiked] = useState(false);
  const [starred, setStarred] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="py-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
          Button Gallery
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto px-4">
          A collection of beautifully crafted buttons with smooth animations and thoughtful interactions
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 pb-16">
        
        {/* Primary Buttons */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Primary Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center gap-2 group">
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              Download
            </button>
            
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center gap-2 group">
              <Save className="w-5 h-5" />
              Save Changes
            </button>
            
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center gap-2 group">
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              Send Message
            </button>
            
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center gap-2 group">
              <ShoppingCart className="w-5 h-5" />
              Add to Cart
            </button>
          </div>
        </section>

        {/* Interactive Buttons */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Interactive Elements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center gap-2"
            >
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
              {isPlaying ? 'Pause' : 'Play'}
            </button>
            
            <button 
              onClick={() => setLiked(!liked)}
              className={`${liked ? 'bg-red-500 text-white' : 'bg-white text-gray-700 border-2 border-red-200'} hover:bg-red-500 hover:text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center gap-2`}
            >
              <Heart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
              {liked ? 'Liked' : 'Like'}
            </button>
            
            <button 
              onClick={() => setStarred(!starred)}
              className={`${starred ? 'bg-yellow-500 text-white' : 'bg-white text-gray-700 border-2 border-yellow-200'} hover:bg-yellow-500 hover:text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center gap-2`}
            >
              <Star className={`w-5 h-5 ${starred ? 'fill-current' : ''}`} />
              {starred ? 'Starred' : 'Star'}
            </button>
          </div>
        </section>

        {/* Secondary Buttons */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Secondary Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <button className="bg-white border-2 border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-600 font-semibold py-4 px-8 rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center gap-2 group">
              <User className="w-5 h-5" />
              Profile
            </button>
            
            <button className="bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-700 hover:text-gray-900 font-semibold py-4 px-8 rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center gap-2">
              <Settings className="w-5 h-5" />
              Settings
            </button>
            
            <button className="bg-white border-2 border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-600 font-semibold py-4 px-8 rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center gap-2 group">
              <Edit className="w-5 h-5" />
              Edit
            </button>
            
            <button className="bg-white border-2 border-red-200 hover:border-red-300 text-red-600 hover:text-red-700 font-semibold py-4 px-8 rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center gap-2">
              <Trash2 className="w-5 h-5" />
              Delete
            </button>
          </div>
        </section>

        {/* Gradient Buttons */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Gradient Collection</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <button className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2">
              Coral Sunrise
              <ArrowRight className="w-4 h-4" />
            </button>
            
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2">
              Ocean Breeze
              <ArrowRight className="w-4 h-4" />
            </button>
            
            <button className="bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2">
              Purple Magic
              <ArrowRight className="w-4 h-4" />
            </button>
            
            <button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2">
              Forest Fresh
              <ArrowRight className="w-4 h-4" />
            </button>
            
            <button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2">
              Golden Hour
              <ArrowRight className="w-4 h-4" />
            </button>
            
            <button className="bg-gradient-to-r from-slate-500 to-slate-700 hover:from-slate-600 hover:to-slate-800 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2">
              Midnight
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* Size Variations */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Size Variations</h2>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg shadow hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200 text-sm">
              Small
            </button>
            
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200">
              Medium
            </button>
            
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 text-lg">
              Large
            </button>
            
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 px-10 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200 text-xl">
              Extra Large
            </button>
          </div>
        </section>

        {/* Floating Action Button */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Floating Action</h2>
          <div className="flex justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 group">
              <Plus className="w-6 h-6 group-hover:rotate-90 transition-transform duration-200" />
            </button>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-600">
        <p>Crafted with attention to detail and smooth interactions</p>
      </footer>
    </div>
  );
}

export default App;