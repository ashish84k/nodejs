import React, { useState, useRef } from "react";
import {
  CloudArrowUpIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/outline";

const CompressFile = () => {
  // Defaults optimized for best quality
  const [compressionType, setCompressionType] = useState("auto");
  const [quality, setQuality] = useState(90);
  const [outputFormat, setOutputFormat] = useState("same");
  const [maxWidth, setMaxWidth] = useState("");
  const [maxHeight, setMaxHeight] = useState("");
  const [preserveMetadata, setPreserveMetadata] = useState(true);
  const [speed, setSpeed] = useState("best");
  const [bitrate, setBitrate] = useState("");
  const [frameRate, setFrameRate] = useState("");

  const fileInputRef = useRef(null);

  const handleBoxClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-6">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-3xl border border-gray-200">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-2">
          File & Folder Compression Tool
        </h1>
        <p className="text-gray-500 text-center mb-8">
          Upload your files or folders and customize compression settings.
        </p>

        <form
          action="/upload"
          method="POST"
          encType="multipart/form-data"
          className="space-y-8"
        >
          {/* Upload Section */}
          <div
            onClick={handleBoxClick}
            className="bg-gray-50 p-6 rounded-xl border-2 border-dashed border-gray-300 text-center hover:border-blue-500 transition cursor-pointer"
          >
            <CloudArrowUpIcon className="mx-auto h-12 w-12 text-blue-500" />
            <p className="text-gray-600 mt-2">
              Click anywhere or drag & drop to upload files or folders
            </p>
            <input
              type="file"
              name="files"
              accept="image/*,video/*"
              webkitdirectory="true"
              directory="true"
              multiple
              ref={fileInputRef}
              className="hidden"
            />
          </div>

          {/* Compression Settings */}
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
            <label className="flex items-center gap-2 mb-4 font-semibold text-gray-700">
              <AdjustmentsHorizontalIcon className="h-5 w-5 text-blue-600" />
              Compression Settings
            </label>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Compression Type */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Compression Type
                </label>
                <select
                  name="compressionType"
                  value={compressionType}
                  onChange={(e) => setCompressionType(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-2"
                >
                  <option value="auto">Auto Detect</option>
                  <option value="image">Image Only</option>
                  <option value="video">Video Only</option>
                </select>
              </div>

              {/* Output Format */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Output Format
                </label>
                <select
                  name="outputFormat"
                  value={outputFormat}
                  onChange={(e) => setOutputFormat(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-2"
                >
                  <option value="same">Same as original</option>
                  <option value="jpg">JPG</option>
                  <option value="png">PNG</option>
                  <option value="mp4">MP4</option>
                  <option value="webm">WEBM</option>
                </select>
              </div>

              {/* Quality */}
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Quality: {quality}%
                </label>
                <input
                  type="range"
                  min="10"
                  max="100"
                  step="5"
                  value={quality}
                  onChange={(e) => setQuality(e.target.value)}
                  className="w-full accent-blue-600"
                />
              </div>

              {/* Speed vs Quality */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Compression Speed
                </label>
                <select
                  name="speed"
                  value={speed}
                  onChange={(e) => setSpeed(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-2"
                >
                  <option value="fast">Fast</option>
                  <option value="balanced">Balanced</option>
                  <option value="best">Best Quality</option>
                </select>
              </div>

              {/* Resize Options */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Max Width (px)
                </label>
                <input
                  type="number"
                  value={maxWidth}
                  onChange={(e) => setMaxWidth(e.target.value)}
                  placeholder="Leave blank to keep original"
                  className="w-full border border-gray-300 rounded-lg p-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Max Height (px)
                </label>
                <input
                  type="number"
                  value={maxHeight}
                  onChange={(e) => setMaxHeight(e.target.value)}
                  placeholder="Leave blank to keep original"
                  className="w-full border border-gray-300 rounded-lg p-2"
                />
              </div>

              {/* Advanced Video Settings */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Bitrate (e.g., 1000k)
                </label>
                <input
                  type="text"
                  value={bitrate}
                  onChange={(e) => setBitrate(e.target.value)}
                  placeholder="Optional"
                  className="w-full border border-gray-300 rounded-lg p-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Frame Rate (fps)
                </label>
                <input
                  type="number"
                  value={frameRate}
                  onChange={(e) => setFrameRate(e.target.value)}
                  placeholder="Optional"
                  className="w-full border border-gray-300 rounded-lg p-2"
                />
              </div>
            </div>

            {/* Preserve Metadata */}
            <div className="mt-4 flex items-center">
              <input
                type="checkbox"
                checked={preserveMetadata}
                onChange={() => setPreserveMetadata(!preserveMetadata)}
                className="h-4 w-4 text-blue-600"
              />
              <label className="ml-2 text-sm text-gray-600">
                Preserve metadata (EXIF, creation date, etc.)
              </label>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              type="reset"
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg transition"
            >
              Reset
            </button>
            <button
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
            >
              Compress
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompressFile;
