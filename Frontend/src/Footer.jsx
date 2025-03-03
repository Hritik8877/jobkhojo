import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-t-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Job Khojo</h2>
            <p className="text-sm">© 2025 your Company. All rights reserved</p>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://facebook.com"
              className="hover:text-gray-400"
              aria-label="Facebook"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24h11.495v-9.294H9.69V10.41h3.13V7.897c0-3.1 1.894-4.788 4.66-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.503 0-1.794.715-1.794 1.763v2.314h3.587l-.467 4.296h-3.12V24h6.116c.73 0 1.325-.597 1.325-1.325V1.325C24 .597 23.403 0 22.675 0z" />
              </svg>
            </a>

            <a
              href="https://twitter.com"
              className="hover:text-gray-500"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.724-.951.555-2.005.959-3.127 1.184-.897-.956-2.173-1.555-3.591-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.087-.205-7.713-2.165-10.141-5.144-.423.722-.666 1.561-.666 2.457 0 1.696.865 3.195 2.188 4.073-.804-.026-1.56-.246-2.228-.616v.061c0 2.366 1.685 4.342 3.918 4.793-.41.111-.844.171-1.292.171-.315 0-.621-.031-.923-.088.623 1.953 2.428 3.376 4.568 3.416-1.674 1.309-3.778 2.087-6.065 2.087-.393 0-.779-.023-1.163-.067 2.164 1.387 4.74 2.2 7.498 2.2 8.998 0 13.917-7.457 13.917-13.918 0-.212-.004-.425-.013-.637.953-.689 1.78-1.56 2.436-2.549z" />
              </svg>
            </a>

            <a
              href="https://linkedin.com"
              className="hover:text-gray-500"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22.23 0H1.77C.79 0 0 .775 0 1.732v20.536C0 23.225.79 24 1.77 24h20.46c.98 0 1.77-.775 1.77-1.732V1.732C24 .775 23.21 0 22.23 0zM7.08 20.452H3.56V9h3.52v11.452zM5.32 7.546c-1.13 0-2.05-.92-2.05-2.05s.92-2.05 2.05-2.05 2.05.92 2.05 2.05-.92 2.05-2.05 2.05zM20.45 20.452h-3.52V14.61c0-1.39-.03-3.17-1.93-3.17-1.93 0-2.22 1.5-2.22 3.05v5.96h-3.52V9h3.38v1.56h.05c.47-.89 1.62-1.83 3.33-1.83 3.56 0 4.22 2.34 4.22 5.39v6.34z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
