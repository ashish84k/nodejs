import React, { useState } from "react";

const VideoToImage = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [fps, setFps] = useState(1);
  const [startTime, setStartTime] = useState("00:00:00");
  const [endTime, setEndTime] = useState("");
  const [resolution, setResolution] = useState("1280x720");
  const [format, setFormat] = useState("jpg");
  const [quality, setQuality] = useState(2);
  const [filenamePattern, setFilenamePattern] = useState("output_%04d");
  const [lockAspect, setLockAspect] = useState(true);
  const [frameLimit, setFrameLimit] = useState("");

  const handleFileChange = (e) => {
    setVideoFile(e.target.files[0]);
  };

  const handleConvert = () => {
    if (!videoFile) {
      alert("Please select a video file first!");
      return;
    }

    let vfOptions = `fps=${fps}`;
    vfOptions += `,scale=${resolution}`;
    if (lockAspect) vfOptions += ":force_original_aspect_ratio=decrease";

    let timeOptions = startTime ? `-ss ${startTime} ` : "";
    if (endTime) timeOptions += `-to ${endTime} `;

    let frameCountOption = frameLimit ? `-vframes ${frameLimit} ` : "";

    const command = `ffmpeg -i "${videoFile.name}" ${timeOptions}-vf "${vfOptions}" -q:v ${quality} ${frameCountOption}${filenamePattern}.${format}`;

    alert(`FFmpeg Command:\n\n${command}`);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-6 w-full max-w-2xl space-y-6">
        <h1 className="text-2xl font-bold text-gray-800 text-center">
          🎯 Video to Image Converter
        </h1>

        {/* File Upload */}
        <div>
          <label className="block mb-2 font-semibold">Upload Video</label>
          <input
            type="file"
            accept="video/*"
            onChange={handleFileChange}
            className="w-full border p-2 rounded-lg"
          />
        </div>

        {/* FPS */}
        <div>
          <label className="block mb-2 font-semibold">
            Frames Per Second (fps)
          </label>
          <input
            type="number"
            value={fps}
            onChange={(e) => setFps(e.target.value)}
            className="w-full border p-2 rounded-lg"
          />
        </div>

        {/* Start & End Time */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-semibold">Start Time</label>
            <input
              type="text"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              placeholder="00:00:05"
              className="w-full border p-2 rounded-lg"
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">End Time</label>
            <input
              type="text"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              placeholder="00:00:10"
              className="w-full border p-2 rounded-lg"
            />
          </div>
        </div>

        {/* Resolution */}
        <div>
          <label className="block mb-2 font-semibold">Resolution</label>
          <input
            type="text"
            value={resolution}
            onChange={(e) => setResolution(e.target.value)}
            placeholder="1280x720"
            className="w-full border p-2 rounded-lg"
          />
        </div>

        {/* Aspect Ratio */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={lockAspect}
            onChange={(e) => setLockAspect(e.target.checked)}
          />
          <label className="font-semibold">Lock Aspect Ratio</label>
        </div>

        {/* Format & Quality */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-semibold">Format</label>
            <select
              value={format}
              onChange={(e) => setFormat(e.target.value)}
              className="w-full border p-2 rounded-lg"
            >
              <option value="jpg">JPG</option>
              <option value="png">PNG</option>
              <option value="bmp">BMP</option>
              <option value="webp">WebP</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 font-semibold">Quality (1-31)</label>
            <input
              type="number"
              min="1"
              max="31"
              value={quality}
              onChange={(e) => setQuality(e.target.value)}
              className="w-full border p-2 rounded-lg"
            />
          </div>
        </div>

        {/* Frame Limit */}
        <div>
          <label className="block mb-2 font-semibold">
            Number of Frames (Optional)
          </label>
          <input
            type="number"
            value={frameLimit}
            onChange={(e) => setFrameLimit(e.target.value)}
            className="w-full border p-2 rounded-lg"
          />
        </div>

        {/* Filename Pattern */}
        <div>
          <label className="block mb-2 font-semibold">
            Output Filename Pattern
          </label>
          <input
            type="text"
            value={filenamePattern}
            onChange={(e) => setFilenamePattern(e.target.value)}
            className="w-full border p-2 rounded-lg"
          />
          <p className="text-xs text-gray-500">
            Example: output_%04d will produce output_0001, output_0002...
          </p>
        </div>

        {/* Convert Button */}
        <button
          onClick={handleConvert}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold shadow-md transition duration-300"
        >
          Generate FFmpeg Command
        </button>

        {/* Video Preview */}
        {videoFile && (
          <div className="mt-4">
            <video
              src={URL.createObjectURL(videoFile)}
              controls
              className="w-full rounded-lg"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoToImage;
