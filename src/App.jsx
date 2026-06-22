import React from 'react';

export default function App() {
  const WHATSAPP_LINK = "https://wa.me/5554996174905";
  const GMB_LINK = "https://share.google/P0FEzydHvsrsasUbq";

  return (
    <div className="min-h-screen bg-zinc-950 font-sans flex flex-col text-zinc-100 selection:bg-red-500 selection:text-white relative">
      
      {/* HEADER FIXO */}
      <header className="fixed top-0 w-full bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800 z-50">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500">
              <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>
            </svg>
            <h1 className="text-xl sm:text-2xl font-black tracking-tighter text-white">
              Guincho<span className="text-red-500">SOS</span>Rocha
            </h1>
          </div>

          <a href={WHATSAPP_LINK} 
             target="_blank" rel="noopener noreferrer"
             className="bg-red-600 text-white font-semibold py-2 px-5 rounded-full flex items-center gap-2 hover:bg-red-500 transition-colors text-sm shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <span>Plantão 24h</span>
          </a>
        </div>
      </header>

      {/* WHATSAPP FIXO NO CANTO */}
      <a href={WHATSAPP_LINK}
         target="_blank"
         rel="noopener noreferrer"
         aria-label="Chamar no WhatsApp"
         className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
           <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
      </a>

      {/* MAIN CONTENT */}
      <main className="flex-grow pt-20">
        
        {/* HERO SECTION */}
        <section className="relative w-full bg-zinc-900 flex items-center py-20 sm:py-28 px-4 overflow-hidden border-b border-zinc-800">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-luminosity grayscale-[30%]"
            style={{ 
              backgroundImage: 'url("/images/Caminhão-Trabalho.jpeg")',
              backgroundPosition: 'center'
            }}
          ></div>
          <div className="absolute inset-0 z-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent"></div>
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-zinc-950 via-zinc-950/60 to-transparent"></div>

          <div className="relative z-10 max-w-4xl mx-auto w-full flex flex-col items-center text-center">
            
            <span className="bg-red-600/10 text-red-500 border border-red-500/30 font-semibold px-4 py-1.5 rounded-full text-xs sm:text-sm mb-6 inline-flex items-center gap-2 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              Socorro 24 horas
            </span>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 leading-[1.1] drop-shadow-2xl">
              Precisou de um Help? <br />
              <span className="text-zinc-300">Socorro Rápido</span>
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl font-medium text-zinc-400 mb-10 max-w-2xl drop-shadow-md">
              Atendimento seguro e eficiente em <strong className="text-white">Farroupilha</strong> e <strong className="text-white">Caxias do Sul</strong>.
            </p>

            <a href={WHATSAPP_LINK} 
               target="_blank" 
               rel="noopener noreferrer" 
               className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-base sm:text-lg py-3.5 px-8 rounded-full flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(37,211,102,0.25)] hover:-translate-y-1 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              Solicitar Guincho Agora
            </a>
            
          </div>
        </section>

        {/* SEO SECTION: SOBRE A GUINCHO SOS ROCHA */}
        <section className="py-20 px-4 bg-zinc-950 border-b border-zinc-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-8">Sobre o Guincho SOS Rocha</h2>
            <div className="bg-zinc-900 p-8 sm:p-10 rounded-3xl border border-zinc-800 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-red-500/5 rounded-tr-full"></div>
              
              <h3 className="sr-only">Especialistas em Reboque e Assistência Automotiva 24 horas</h3>
              <p className="text-zinc-300 font-medium text-lg leading-relaxed text-left sm:text-center relative z-10">
                O <strong className="text-white">Guincho SOS Rocha</strong> é uma empresa especializada em serviços de <strong className="text-white">reboque e assistência automotiva 24 horas</strong>. Atendemos com agilidade e segurança motoristas em <strong className="text-white">Farroupilha, Caxias do Sul e região</strong>. Oferecemos transporte especializado para <strong className="text-white">veículos leves e pesados</strong>, prestando socorro imediato em casos de <strong className="text-white">panes mecânicas, elétricas, acidentes</strong> ou realizando <strong className="text-white">transportes logísticos agendados</strong>.
              </p>
              <p className="text-zinc-300 font-medium text-lg leading-relaxed text-left sm:text-center mt-6 relative z-10">
                Nosso compromisso é entregar um atendimento rápido, com equipamentos adequados e profissionais preparados para garantir a integridade do seu veículo a qualquer hora do dia ou da noite.
              </p>
              <p className="text-red-400 font-bold text-xl mt-8 relative z-10">
                Precisou de ajuda na estrada? Nossa equipe está de plantão para socorrer você.
              </p>
            </div>
          </div>
        </section>

        {/* GRID DE SERVIÇOS (Otimizado) */}
        <section className="py-20 px-4 bg-zinc-900 border-b border-zinc-800">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-3xl sm:text-4xl font-black text-center text-white mb-16">Serviços Especializados</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="bg-zinc-950 rounded-3xl p-8 border border-zinc-800 shadow-xl hover:bg-zinc-800 transition-all hover:-translate-y-1 flex flex-col items-center text-center group">
                <div className="w-20 h-20 bg-red-500/5 rounded-2xl text-red-500 flex items-center justify-center mb-6 border border-red-500/10 group-hover:bg-red-500/10 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>
                  </svg>
                </div>
                <h4 className="text-xl font-black text-white mb-3">Reboque de Veículos</h4>
                <p className="text-zinc-400 font-medium leading-relaxed">Guincho especializado para veículos leves e pesados. Transporte com total segurança.</p>
              </div>

              <div className="bg-zinc-950 rounded-3xl p-8 border border-zinc-800 shadow-xl hover:bg-zinc-800 transition-all hover:-translate-y-1 flex flex-col items-center text-center group">
                <div className="w-20 h-20 bg-red-500/5 rounded-2xl text-red-500 flex items-center justify-center mb-6 border border-red-500/10 group-hover:bg-red-500/10 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <h4 className="text-xl font-black text-white mb-3">Plantão 24 Horas</h4>
                <p className="text-zinc-400 font-medium leading-relaxed">Plantão dia e noite. Estamos sempre prontos para atender você em qualquer emergência.</p>
              </div>

              <div className="bg-zinc-950 rounded-3xl p-8 border border-zinc-800 shadow-xl hover:bg-zinc-800 transition-all hover:-translate-y-1 flex flex-col items-center text-center group">
                <div className="w-20 h-20 bg-red-500/5 rounded-2xl text-red-500 flex items-center justify-center mb-6 border border-red-500/10 group-hover:bg-red-500/10 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>
                  </svg>
                </div>
                <h4 className="text-xl font-black text-white mb-3">Panes e Acidentes</h4>
                <p className="text-zinc-400 font-medium leading-relaxed">Equipamentos adequados para resgate rápido em pane elétrica, mecânica ou acidentes.</p>
              </div>

              <div className="bg-zinc-950 rounded-3xl p-8 border border-zinc-800 shadow-xl hover:bg-zinc-800 transition-all hover:-translate-y-1 flex flex-col items-center text-center group">
                <div className="w-20 h-20 bg-red-500/5 rounded-2xl text-red-500 flex items-center justify-center mb-6 border border-red-500/10 group-hover:bg-red-500/10 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
                  </svg>
                </div>
                <h4 className="text-xl font-black text-white mb-3">Pátio Seguro</h4>
                <p className="text-zinc-400 font-medium leading-relaxed">Espaço próprio, fechado e monitorado para abrigar seu veículo com tranquilidade.</p>
              </div>

            </div>
          </div>
        </section>

        {/* NOVA SEÇÃO: SERVIÇO EM PRÁTICA */}
        <section className="py-20 px-4 bg-zinc-950 border-b border-zinc-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-3xl sm:text-4xl font-black text-white mb-4">Serviço em Prática</h3>
              <p className="text-zinc-400 font-medium max-w-2xl mx-auto text-lg">
                Confira nossos resgates e transportes reais. Cuidamos do seu veículo com o máximo de profissionalismo e agilidade.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="col-span-2 row-span-2 group overflow-hidden rounded-2xl border border-zinc-800 shadow-xl relative">
                <div className="absolute inset-0 bg-zinc-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img src="/images/servico-pratica-1.jpeg" alt="Resgate em prática" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
              </div>
              
              <div className="group overflow-hidden rounded-2xl border border-zinc-800 shadow-xl relative aspect-square">
                <div className="absolute inset-0 bg-zinc-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img src="/images/servico-pratica-2.jpeg" alt="Atendimento" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
              </div>
              
              <div className="group overflow-hidden rounded-2xl border border-zinc-800 shadow-xl relative aspect-square">
                <div className="absolute inset-0 bg-zinc-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img src="/images/servico-pratica-3.jpeg" alt="Transporte" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
              </div>

              <div className="group overflow-hidden rounded-2xl border border-zinc-800 shadow-xl relative aspect-square">
                <div className="absolute inset-0 bg-zinc-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img src="/images/servico-pratica-4.jpeg" alt="Veículo seguro" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
              </div>

              <div className="group overflow-hidden rounded-2xl border border-zinc-800 shadow-xl relative aspect-square">
                <div className="absolute inset-0 bg-zinc-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img src="/images/servico-pratica-5.jpeg" alt="Caminhão em ação" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </div>
        </section>

        {/* PÁTIO FÍSICO E LOCALIZAÇÃO */}
        <section className="py-20 px-4 bg-zinc-900 border-b border-zinc-800" id="localizacao">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl sm:text-4xl font-black text-white mb-4">Nossa Base e Pátio Físico</h3>
                  <p className="text-zinc-400 font-medium text-lg leading-relaxed">
                    Contamos com um pátio próprio, <strong className="text-white font-bold">fechado e totalmente seguro</strong> para abrigar nossos equipamentos e receber veículos com tranquilidade. Estrutura completa e transparente.
                  </p>
                </div>
                
                <div className="bg-zinc-950 p-6 sm:p-8 rounded-3xl border border-zinc-800 shadow-xl">
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                    Endereço Oficial
                  </h4>
                  <p className="text-zinc-300 font-medium leading-relaxed mb-6 pl-9 text-lg">
                    Rua Alício Octávio Maioli, 167 - Cinquentenário<br />
                    Farroupilha - RS, 95174-354
                  </p>
                  
                  <div className="pl-9">
                    <a href={GMB_LINK} 
                       target="_blank" rel="noopener noreferrer"
                       className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold py-3.5 px-6 rounded-full transition-all shadow-lg hover:-translate-y-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
                      </svg>
                      Ver no Google Maps
                    </a>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 group overflow-hidden rounded-2xl border border-zinc-800 shadow-2xl relative">
                  <div className="absolute inset-0 bg-zinc-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img src="/images/Foto-Entrada.jpeg" alt="Entrada do Pátio" className="w-full h-64 sm:h-80 object-cover transform group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="group overflow-hidden rounded-2xl border border-zinc-800 shadow-xl relative">
                  <div className="absolute inset-0 bg-zinc-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img src="/images/Foto-Portão-Entrada-Informações.jpeg" alt="Informações do Portão" className="w-full h-40 sm:h-56 object-cover transform group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="group overflow-hidden rounded-2xl border border-zinc-800 shadow-xl relative">
                  <div className="absolute inset-0 bg-zinc-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img src="/images/Foto-Caminhão-Guincho-Traseira-Entrada.jpeg" alt="Caminhão no Pátio" className="w-full h-40 sm:h-56 object-cover transform group-hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER SEMÂNTICO COM SEO E GMB */}
      <footer className="bg-[#050505] text-zinc-400 pt-16 pb-8 px-4 border-t-2 border-red-900/50">
        <div className="max-w-7xl mx-auto flex flex-col items-start gap-8">
          
          <div className="w-full pb-8 border-b border-zinc-900 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">Guincho SOS Rocha</h2>
              <p className="text-zinc-500 font-medium">Reboque e Assistência Automotiva 24 horas na Serra Gaúcha.</p>
            </div>
            
            <a href={GMB_LINK} target="_blank" rel="noopener noreferrer" className="bg-white/5 hover:bg-white/10 border border-white/10 text-white py-3 px-6 rounded-xl flex items-center gap-3 transition-all group">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                <path d="M21.54 15.11l-3.25-3.25a2 2 0 0 0-2.83 0l-1.06 1.06a8 8 0 0 1-5.3-5.3l1.06-1.06a2 2 0 0 0 0-2.83l-3.25-3.25a2 2 0 0 0-2.83 0l-1.5 1.5a2.5 2.5 0 0 0-.6 2.1c.95 4.35 4.45 7.85 8.8 8.8a2.5 2.5 0 0 0 2.1-.6l1.5-1.5a2 2 0 0 0 0-2.83z"/>
              </svg>
              <div className="flex flex-col text-left">
                <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Google Meu Negócio</span>
                <span className="font-bold group-hover:text-red-400 transition-colors">Avalie nosso serviço</span>
              </div>
            </a>
          </div>

          <address className="not-italic w-full flex flex-col md:flex-row gap-6 md:gap-16 text-sm leading-relaxed mb-8">
            <div className="flex flex-col gap-2">
              <p><strong className="text-zinc-300">CNPJ:</strong> 61.458.540/0001-08</p>
              <p><strong className="text-zinc-300">Plantão:</strong> (54) 99617-4905</p>
            </div>
            <div className="flex flex-col gap-2 md:border-l md:border-zinc-900 md:pl-6">
              <p><strong className="text-zinc-300">Endereço Sede e Pátio:</strong></p>
              <p>Rua Alício Octávio Maioli, 167 - Cinquentenário<br />
                 Farroupilha - RS, 95174-354</p>
            </div>
          </address>

          <div className="w-full pt-6 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
            <p>&copy; {new Date().getFullYear()} Guincho SOS Rocha. Todos os direitos reservados. Reboque 24 Horas em Farroupilha e Caxias do Sul.</p>
            
            <p className="opacity-50">
              Desenvolvido por <a href="https://instagram.com/nivix.co" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-400 font-bold transition-colors">@nivix</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
