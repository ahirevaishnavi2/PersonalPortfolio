export default function Footer() {
  return (
    <footer className="bg-dark text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center justify-center md:justify-start">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-xl">VA</span>
              </div>
              <span className="font-bold text-xl ml-2">Vaishnavi Ahire</span>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} Vaishnavi Ahire. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
