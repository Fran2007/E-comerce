const Navtop = () => {
  return (
    <nav className="bg-gray-900">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <a
            href="/"
            className="text-lg font-semibold text-white hover:text-gray-300"
          >
            Mi Tienda
          </a>
          <ul className="ml-10 space-x-4">
            <li className="inline-block">
              <a href="/categoria1" className="text-gray-300 hover:text-white">
                Categoría 1
              </a>
            </li>
            <li className="inline-block">
              <a href="/categoria2" className="text-gray-300 hover:text-white">
                Categoría 2
              </a>
            </li>
            <li className="inline-block">
              <a href="/categoria3" className="text-gray-300 hover:text-white">
                Categoría 3
              </a>
            </li>
          </ul>
        </div>
        <div className="relative">
          <input
            type="text"
            className="py-2 pl-10 pr-4 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Buscar productos"
          />
          <button className="absolute left-3 top-2 text-gray-500 hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9 0a9 9 0 100 18A9 9 0 009 0zM1 9a8 8 0 1116 0A8 8 0 011 9z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M14.293 15.293a1 1 0 11-1.414 1.414l-3.792-3.792a1 1 0 111.414-1.414l3.792 3.792z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="ml-4">
          <a href="/carrito" className="text-gray-300 hover:text-white">
            <span className="text-2xl">&#128722;</span>
            <span className="text-2xl">1</span>
          </a>
        </div>
        <div className="ml-4">
          <a href="/login" className="text-gray-300 hover:text-white">
            Iniciar sesión
          </a>
          <a href="/register" className="ml-4 text-gray-300 hover:text-white">
            Registrarse
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navtop;
