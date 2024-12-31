import React from 'react';

interface SampleInterfaceProps {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    neutral: string;
    highlight: string;
  };
}

const SampleInterface: React.FC<SampleInterfaceProps> = ({ colors }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg" style={{ backgroundColor: colors.secondary }}>
      <header className="p-4 flex justify-between items-center" style={{ backgroundColor: colors.primary }}>
        <h2 className="text-xl font-bold" style={{ color: colors.secondary }}>ModernApp</h2>
        <nav>
          <ul className="flex space-x-4">
            {['Home', 'Features', 'Pricing', 'Contact'].map((item) => (
              <li key={item}>
                <a href="#" className="hover:underline" style={{ color: colors.secondary }}>{item}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      
      <main className="p-6">
        <section className="mb-8">
          <h1 className="text-3xl font-bold mb-4" style={{ color: colors.primary }}>Welcome to ModernApp</h1>
          <p className="mb-4" style={{ color: colors.neutral }}>
            Experience the future of web applications with our cutting-edge platform. 
            ModernApp brings you the best in design and functionality.
          </p>
          <button className="px-6 py-2 rounded-full text-sm font-semibold" 
                  style={{ backgroundColor: colors.highlight, color: colors.primary }}>
            Get Started
          </button>
        </section>
        
        <section className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {['Innovative', 'Responsive', 'Secure'].map((feature) => (
            <div key={feature} className="p-4 rounded-lg" style={{ backgroundColor: colors.accent }}>
              <h3 className="text-lg font-semibold mb-2" style={{ color: colors.secondary }}>{feature}</h3>
              <p style={{ color: colors.secondary }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          ))}
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4" style={{ color: colors.primary }}>Why Choose Us?</h2>
          <ul className="list-disc list-inside" style={{ color: colors.neutral }}>
            <li>Cutting-edge technology</li>
            <li>User-friendly interface</li>
            <li>24/7 customer support</li>
            <li>Regular updates and improvements</li>
          </ul>
        </section>
      </main>
      
      <footer className="p-4 text-center" style={{ backgroundColor: colors.primary, color: colors.secondary }}>
        <p>© 2023 ModernApp. All rights reserved.</p>
        <div className="mt-2">
          <a href="#" className="hover:underline mx-2" style={{ color: colors.highlight }}>Privacy Policy</a>
          <a href="#" className="hover:underline mx-2" style={{ color: colors.highlight }}>Terms of Service</a>
        </div>
      </footer>
    </div>
  );
};

export default SampleInterface;

