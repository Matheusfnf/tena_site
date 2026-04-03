"use client";

import Image from 'next/image';
import styles from './BiofabricasShowcase.module.css';

const models = [
  {
    id: 'gold',
    name: 'Biofábrica Gold',
    category: 'Premium • Comodato 3 anos',
    description: 'Nossa estrutura máxima em biotecnologia on-farm. Voltada para amplas necessidades produtivas, este modelo inclui a construção da infraestrutura em isopainel e fornecimento completo de todo o maquinário em comodato.',
    benefits: [
      '06 Biorreatores de Inox (2.000 L cada)',
      '07 Tanques de Armazenamento (4.000 L cada)',
      'Processos 100% Automatizados',
      'Estrutura física de 160 m² (isopainel incluído)',
      'Assistência Técnica Integrada via Tena'
    ],
    images: ['/biofabrica_gold.jpeg', '/biofabrica_gold_2.png'],
    video: 'https://www.youtube.com/embed/64k6afyZ7pA',
    videoMode: 'portrait',
    reverse: true,
  },
  {
    id: 'silver',
    name: 'Biofábrica Silver',
    category: 'Advanced • Comodato 3 anos',
    description: 'Sistema altamente eficiente com fornecimento em comodato. Ela mantém toda a escala de escala industrial da linha Gold, perfeitamente balanceada para atender ao nível rigoroso das grandes colheitas.',
    benefits: [
      '06 Biorreatores de Inox (2.000 L cada)',
      '07 Tanques de Armazenamento (4.000 L cada)',
      'Processos 100% Automatizados',
      'Estrutura física de 160 m² (isopainel incluído)',
      'Assistência Técnica de Fábrica e Campo'
    ],
    images: ['/biofabrica_silver.png'],
    video: 'https://www.youtube.com/embed/j7o30rNW_ZE',
    reverse: true,
  },
  {
    id: 'standalone',
    name: 'Bioreator Stand Alone',
    category: 'Compact • Comodato 3 anos',
    description: 'Solução focada em produtores que já dispõem de estrutura física própria em suas fazendas. Oferece controle excepcional através da nossa planta de processos.',
    benefits: [
      '01 Biorreator de Inox Principal (2.000 L)',
      '01 Tanque de Armazenamento (2.000 L)',
      'Processos Semi-Automatizados para acompanhamento',
      'Instalação rápida e prática sem necessidade de obra',
      'Assistência Técnica Contínua'
    ],
    images: ['/standalone-1.png', '/standalone-3.png'],
    reverse: false,
  },
  {
    id: 'biobag',
    name: 'Sistema Biobag',
    category: 'Essencial • Comodato 1 ano',
    description: 'Multiplicação de alto desempenho especializada em fermentação líquida. É a opção ideal para adoção rápida e econômica do modelo on-farm, com alta rentabilidade.',
    benefits: [
      '01 Equipamento central de Multiplicação',
      'Gestão em 04 Bolsas Simultâneas',
      'Processos Semi-Automatizados práticos e intuitivos',
      'Modelo sem Estrutura Física Complexa',
      'Assistência Técnica e Suporte Especializado'
    ],
    images: ['/biobag-1.png'],
    video: 'https://www.youtube.com/embed/LZRafLbGyC0',
    reverse: true,
  },
];

export default function BiofabricasShowcase() {
  return (
    <section className={styles.showcaseWrapper}>
      <div className={styles.container}>
        {models.map((model, index) => (
          <div key={model.id} className={styles.modelBlock}>
            <div className={`${styles.row} ${model.reverse ? styles.rowReverse : ''}`}>
            
            {/* Se for portrait, exibe o video deleitosa mente ao lado. Senão, exibe galeria normal */}
            {model.videoMode === 'portrait' && model.video ? (
              <div className={`${styles.videoSection} ${styles.videoSectionPortrait}`}>
                <div className={`${styles.videoWrapper} ${styles.videoWrapperPortrait}`}>
                  <iframe
                    src={model.video}
                    title={`Video do modelo ${model.name}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className={styles.videoIframe}
                  ></iframe>
                </div>
              </div>
            ) : (
              <div className={`${styles.imageGallery} ${model.images.length === 1 ? styles.singleGallery : ''}`}>
                {model.images.map((imgSrc, i) => (
                  <div 
                    key={i} 
                    className={`${styles.imageFrame} ${model.images.length === 1 ? styles.fullFrame : ''}`}
                  >
                    <div className={styles.imageInner}>
                      <img 
                        src={imgSrc} 
                        alt={`Foto do modelo ${model.name}`} 
                        className={styles.actualImage}
                        onError={(e) => {
                          e.target.src = 'https://placehold.co/800x600/e2e8f0/64748b?text=Sem+Foto';
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Bloco de Conteúdo */}
            <div className={styles.contentBlock}>
              <span className={styles.category}>{model.category}</span>
              <h2 className={styles.title}>{model.name}</h2>
              <p className={styles.description}>{model.description}</p>
              
              <ul className={styles.benefitsList}>
                {model.benefits.map((benefit, j) => (
                  <li key={j}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Se portrait, exibe imagens gigantescas aqui de baixo  */}
          {model.videoMode === 'portrait' && model.images && model.images.length > 0 && (
            <div className={styles.imageGalleryBottom}>
              {model.images.map((imgSrc, i) => (
                <div 
                  key={i} 
                  className={`${styles.imageFrame} ${model.images.length === 1 ? styles.fullFrame : ''}`}
                >
                  <div className={styles.imageInner}>
                    <img 
                      src={imgSrc} 
                      alt={`Foto do modelo ${model.name}`} 
                      className={styles.actualImage}
                      onError={(e) => {
                        e.target.src = 'https://placehold.co/800x600/e2e8f0/64748b?text=Sem+Foto';
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Vídeo em Destaque (Modo Padrão) */}
          {model.video && model.videoMode !== 'portrait' && (
            <div className={styles.videoSection}>
              <div className={styles.videoWrapper}>
                <iframe
                  src={model.video}
                  title={`Video do modelo ${model.name}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className={styles.videoIframe}
                ></iframe>
              </div>
            </div>
          )}
        </div>
        ))}
      </div>
    </section>
  );
}
