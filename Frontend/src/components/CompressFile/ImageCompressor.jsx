import React, { useState } from "react";
import styles from "../Pages/styles";

const ImageCompressor = () => {
  const [quality, setQuality] = useState(80);
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [format, setFormat] = useState("jpeg");
  const [aspectRatio, setAspectRatio] = useState(true);
  const [overwrite, setOverwrite] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFolderSelect = (e) => {
    setSelectedFiles([...e.target.files]);
  };

  const handleCompress = () => {
    alert("Compression process start hoga yaha (backend connect karna padega)");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Bulk Image Compressor
        </h1>

        {/* Folder Input */}
        <div className="mb-5">
          <label className="block font-medium mb-2">Select Folder</label>
          <input
            type="file"
            webkitdirectory="true"
            directory=""
            multiple
            onChange={handleFolderSelect}
            className="w-full border border-gray-300 rounded-lg p-2"
          />
        </div>

        {/* Quality Slider */}
        <div className="mb-5">
          <label className="block font-medium mb-2">
            Compression Quality ({quality}%)
          </label>
          <input
            type="range"
            min="1"
            max="100"
            value={quality}
            onChange={(e) => setQuality(e.target.value)}
            className="w-full"
          />
        </div>

        {/* Resize Options */}
        <div className="grid grid-cols-2 gap-4 mb-5">
          <div>
            <label className="block font-medium mb-2">Max Width (px)</label>
            <input
              type="number"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2"
              placeholder="e.g. 1920"
            />
          </div>
          <div>
            <label className="block font-medium mb-2">Max Height (px)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2"
              placeholder="e.g. 1080"
            />
          </div>
        </div>

        {/* Maintain Aspect Ratio */}
        <div className="flex items-center mb-5">
          <input
            type="checkbox"
            checked={aspectRatio}
            onChange={() => setAspectRatio(!aspectRatio)}
            className="mr-2"
          />
          <label>Maintain Aspect Ratio</label>
        </div>

        {/* Output Format */}
        <div className="mb-5">
          <label className="block font-medium mb-2">Output Format</label>
          <select
            value={format}
            onChange={(e) => setFormat(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2"
          >
            <option value="jpeg">JPEG</option>
            <option value="png">PNG</option>
            <option value="webp">WebP</option>
            <option value="avif">AVIF</option>
          </select>
        </div>

        {/* Overwrite Option */}
        <div className="flex items-center mb-5">
          <input
            type="checkbox"
            checked={overwrite}
            onChange={() => setOverwrite(!overwrite)}
            className="mr-2"
          />
          <label>Overwrite Original Files</label>
        </div>

        {/* Preview */}
        {selectedFiles.length > 0 && (
          <div className="mb-5">
            <h2 className="font-medium mb-3">
              Selected Files ({selectedFiles.length})
            </h2>
            <div className="grid grid-cols-3 gap-3 max-h-60 overflow-y-auto border p-2 rounded-lg">
              {selectedFiles.map((file, idx) => (
                <div key={idx} className="text-sm text-gray-600 truncate">
                  {file.name}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Start Button */}
        <button
          onClick={handleCompress}
          className={`w-full ${styles.btn}`}
        >
          Start Compression
        </button>
      </div>
    </div>
  );
};

export default ImageCompressor;
