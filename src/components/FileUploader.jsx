
import { Upload } from 'lucide-react'

function FileUploader({ onFileSelect }){

  const handleDragOver = (e) => {
    e.preventDefault()
  }

   const handleDrop = (e) => {
    e.preventDefault()
    const files = e.dataTransfer.files
    if (files.length > 0){
        onFileSelect(files)
    }
   }

   const handleClick = () => {
    document.getElementById('file-input').click()
   }
 
   const handleFileChange = (e) => {
    const files = e.target.files
    if (files.length > 0){
        onFileSelect(files)
    }
   }



  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onClick={handleClick}
      className="border-2 border-dashed border-gray-200 rounded-xl p-10 text-center cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition-all"
    >

      { /*Icon*/ }
      <div className="flex justify-center mb-4">
       <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center">
           <Upload size={26} className="text-blue-400"/>
       </div>
      </div>

      { /*Text*/ }
      <h3 className="text-sm font-semibold text-gray-700 mb-1">
        Drop files here
      </h3>
       <p className="text-xs text-gray-400 ">
         or <span className="text-blue-500 font-semibold">browes from computer</span>
       </p>
        <p className="text-xs text-gray-300 mt-2">
            Supports all file . Max 10 GB
        </p>

         
        { /*Hidden Input*/ }
        <input 
         id="file-input"
         type = "file"
         multiple
         className="hidden"
         onChange={handleFileChange}
        />
    </div>
  )
}

export default FileUploader