import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink, Github, Monitor, Smartphone, AlertCircle, Cpu, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '../data';

function IframeFallback({ url, type }: { url: string; type: 'PC' | 'Mobile' }) {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full bg-slate-900 text-slate-300 p-6 text-center z-30 relative">
      <AlertCircle size={48} className="text-cyan-500 mb-4" />
      <h4 className="text-lg font-bold text-white mb-2">Preview Not Available</h4>
      <p className="text-sm mb-6 max-w-xs text-slate-400">
        This project's security settings prevent embedding.
      </p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-2 bg-cyan-600 hover:bg-cyan-500 text-white font-mono text-sm uppercase tracking-wider rounded transition-colors flex items-center gap-2"
      >
        Open Externally <ExternalLink size={16} />
      </a>
    </div>
  );
}

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto border-gray-900 dark:border-gray-900 bg-gray-900 border-[12px] rounded-[3rem] h-[840px] w-[380px] shadow-2xl ring-1 ring-gray-800/50 my-4 flex-shrink-0">
      {/* Dynamic Island / Camera hole */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[110px] h-[30px] bg-black rounded-full z-30 flex items-center justify-end px-2">
        <div className="w-3 h-3 rounded-full bg-[#0a0a0a] shadow-[inset_0_0_2px_rgba(255,255,255,0.2)]"></div>
      </div>

      {/* Side buttons */}
      <div className="absolute top-[120px] -left-[13px] w-[3px] h-[45px] bg-gray-800 rounded-l-md"></div>
      <div className="absolute top-[180px] -left-[13px] w-[3px] h-[45px] bg-gray-800 rounded-l-md"></div>
      <div className="absolute top-[140px] -right-[13px] w-[3px] h-[70px] bg-gray-800 rounded-r-md"></div>

      {/* Screen */}
      <div className="rounded-[2.4rem] overflow-hidden w-full h-full bg-slate-900 relative z-10 border border-black">
        {children}
      </div>
    </div>
  );
}

function ScreenshotCarousel({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="flex items-center justify-center h-full bg-slate-950 text-slate-500 font-mono text-sm p-4 text-center">
        NO SCREENSHOTS AVAILABLE
      </div>
    );
  }

  return (
    <div className="relative w-full h-full bg-slate-950 flex items-center justify-center group/carousel select-none">
      <img
        src={images[currentIndex]}
        alt={`Screenshot ${currentIndex + 1}`}
        className="w-full h-full object-contain"
        draggable={false}
      />
      {images.length > 1 && (
        <>
          <button
            onClick={() => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)}
            className="absolute left-3 p-2 rounded-full bg-black/60 text-white hover:bg-cyan-500 hover:text-slate-950 transition-all z-20 opacity-0 group-hover/carousel:opacity-100 cursor-pointer shadow-lg"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
            className="absolute right-3 p-2 rounded-full bg-black/60 text-white hover:bg-cyan-500 hover:text-slate-950 transition-all z-20 opacity-0 group-hover/carousel:opacity-100 cursor-pointer shadow-lg"
          >
            <ChevronRight size={20} />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20 bg-black/60 px-3 py-1.5 rounded-full backdrop-blur-sm shadow-md">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-1.5 h-1.5 rounded-full transition-all cursor-pointer ${
                  i === currentIndex ? 'bg-cyan-400 w-3.5' : 'bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function PreviewContainer({ url, type, images = [] }: { url: string; type: 'PC' | 'Mobile'; images?: string[] }) {
  const [iframeError, setIframeError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [viewMode, setViewMode] = useState<'live' | 'screens'>(
    !url || url.includes('github.com') ? 'screens' : 'live'
  );

  const isGithubOnly = !url || url.includes('github.com');
  const embedUrl = isGithubOnly ? '' : url;

  useEffect(() => {
    if (isGithubOnly) {
      setIframeError(true);
      setIsLoading(false);
    } else {
      setIframeError(false);
      setIsLoading(true);
    }
  }, [url, isGithubOnly]);

  const IframeContent = (
    <>
      {isLoading && !iframeError && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-900 z-20">
          <div className="w-8 h-8 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {iframeError ? (
        <IframeFallback url={url} type={type} />
      ) : (
        <iframe
          src={embedUrl}
          title={`${type} Preview`}
          className="w-full h-full border-none bg-white relative z-10"
          onLoad={() => setIsLoading(false)}
          onError={() => {
            console.error('Iframe load error');
            setIframeError(true);
          }}
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        />
      )}
    </>
  );

  const Content = viewMode === 'screens' ? <ScreenshotCarousel images={images} /> : IframeContent;

  if (type === 'Mobile') {
    return (
      <div className="flex flex-col items-center w-full">
        <div className="flex items-center justify-between w-full max-w-[380px] mb-2">
          <div className="flex items-center gap-2">
            <Smartphone className="text-cyan-500" size={18} />
            <h3 className="text-sm font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Mobile Preview
            </h3>
          </div>
          {images.length > 0 && !isGithubOnly && (
            <div className="flex bg-slate-200/80 dark:bg-slate-800/80 rounded p-0.5 border border-slate-300 dark:border-slate-700">
              <button
                onClick={() => setViewMode('live')}
                className={`px-2.5 py-0.5 rounded text-[10px] font-mono transition-all cursor-pointer ${
                  viewMode === 'live'
                    ? 'bg-cyan-500 text-slate-950 font-bold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                LIVE
              </button>
              <button
                onClick={() => setViewMode('screens')}
                className={`px-2.5 py-0.5 rounded text-[10px] font-mono transition-all cursor-pointer ${
                  viewMode === 'screens'
                    ? 'bg-cyan-500 text-slate-950 font-bold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                SCREENS
              </button>
            </div>
          )}
        </div>
        <PhoneFrame>
          {Content}
        </PhoneFrame>
      </div>
    );
  }

  // PC Preview
  return (
    <div className="flex flex-col items-center w-full mb-16">
      <div className="flex items-center justify-between w-full max-w-7xl mb-4">
        <div className="flex items-center gap-2">
          <Monitor className="text-cyan-500" size={20} />
          <h3 className="text-base font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider">
            Desktop Preview
          </h3>
        </div>
        {images.length > 0 && !isGithubOnly && (
          <div className="flex bg-slate-200/80 dark:bg-slate-800/80 rounded p-0.5 border border-slate-300 dark:border-slate-700">
            <button
              onClick={() => setViewMode('live')}
              className={`px-2.5 py-0.5 rounded text-[10px] font-mono transition-all cursor-pointer ${
                viewMode === 'live'
                  ? 'bg-cyan-500 text-slate-950 font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              LIVE DEMO
            </button>
            <button
              onClick={() => setViewMode('screens')}
              className={`px-2.5 py-0.5 rounded text-[10px] font-mono transition-all cursor-pointer ${
                viewMode === 'screens'
                  ? 'bg-cyan-500 text-slate-950 font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              SCREENSHOTS
            </button>
          </div>
        )}
      </div>

      <div className="relative bg-slate-900 rounded-xl border border-slate-700 dark:border-slate-600 shadow-2xl overflow-hidden w-full aspect-video max-w-7xl">
        <div className="h-8 bg-slate-800 border-b border-slate-700 flex items-center px-4 gap-2 w-full absolute top-0 left-0 z-20">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-slate-900 rounded px-3 py-0.5 text-xs font-mono text-slate-400 w-1/2 text-center truncate">
              {viewMode === 'live' ? (url || 'Local Environment') : 'SCREENSHOTS_MODE'}
            </div>
          </div>
        </div>

        <div className="absolute top-8 left-0 right-0 bottom-0 bg-slate-900 z-10">
          {Content}
        </div>
      </div>
    </div>
  );
}

export default function ProjectDetailsPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const currentIndex = projects.findIndex(p => p.slug === slug);
  const project = projects[currentIndex];

  if (!project) {
    return (
      <div className="min-h-screen container-padding pt-32 text-center flex flex-col items-center justify-center">
        <h1 className="text-4xl font-mono text-slate-900 dark:text-white mb-4">Project Not Found</h1>
        <button onClick={() => navigate(-1)} className="text-cyan-500 inline-flex items-center gap-2 hover:underline">
          <ArrowLeft size={16} /> Go Back
        </button>
      </div>
    );
  }

  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  const mainLink = project.link && !project.link.includes('github.com') ? project.link : project.github || '#';
  const hasLiveLink = !!(project.link && !project.link.includes('github.com'));

  return (
    <div className="min-h-screen pt-24 pb-16 container-padding relative">
      <div className="max-w-[1400px] mx-auto relative z-10">

        {/* Top Navigation */}
        <div className="flex items-center justify-between mb-8 max-w-5xl mx-auto">
          <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-mono text-sm hover:underline cursor-pointer">
            <ArrowLeft size={16} /> GO_BACK
          </button>

          <div className="flex items-center gap-4">
            <Link to={`/projects/${prevProject.slug}`} className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-cyan-500 hover:text-white transition-colors text-slate-600 dark:text-slate-400" title={`Previous: ${prevProject.title}`}>
              <ChevronLeft size={20} />
            </Link>
            <Link to={`/projects/${nextProject.slug}`} className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-cyan-500 hover:text-white transition-colors text-slate-600 dark:text-slate-400" title={`Next: ${nextProject.title}`}>
              <ChevronRight size={20} />
            </Link>
          </div>
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 max-w-7xl mx-auto"
        >
          <div className="flex flex-wrap items-end justify-between gap-6 mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
              {project.title}
            </h1>
            <div className="flex gap-4">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-slate-900 dark:text-white">
                  <Github size={20} />
                </a>
              )}
              {hasLiveLink && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-mono text-sm uppercase tracking-wider rounded transition-colors flex items-center gap-2 shadow-lg shadow-cyan-500/20">
                  Live Demo <ExternalLink size={16} />
                </a>
              )}
            </div>
          </div>
        </motion.div>

        {/* Desktop Preview (Shows first if applicable) */}
        {!project.mobileOnlyPreview && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex justify-center"
          >
            <PreviewContainer url={mainLink} type="PC" images={project.images} />
          </motion.div>
        )}

        {/* Two Column Layout for Description/Tech + Mobile View */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-7xl mx-auto"
        >
          {/* Left Column (Description, Tags, Learnings) */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-10">

            {/* Tech Stack */}
            <div>
              <h2 className="text-xl font-mono font-bold mb-4 text-slate-900 dark:text-white">
                <span className="text-cyan-500">01.</span> TECH_STACK
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 rounded font-mono text-xs uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="glass-card p-8 rounded-2xl shadow-lg">
              <h2 className="text-xl font-mono font-bold mb-6 text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-4">
                <span className="text-cyan-500">02.</span> PROJECT_OVERVIEW
              </h2>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg whitespace-pre-wrap">
                {project.inDepthDescription}
              </p>
            </div>

            {/* Learnings */}
            <div>
              <h2 className="text-xl font-mono font-bold mb-6 text-slate-900 dark:text-white">
                <span className="text-cyan-500">03.</span> TECHNICAL_LOGS
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.learnings?.map((learningGroup, i) => (
                  <div key={i} className="glass-card p-6 rounded-xl border-t-4 border-t-cyan-500 hover:-translate-y-1 transition-transform">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                      <Cpu size={18} className="text-cyan-500" /> {learningGroup.category}
                    </h3>
                    <ul className="space-y-3">
                      {learningGroup.points.map((point, j) => (
                        <li key={j} className="text-slate-600 dark:text-slate-400 text-sm flex items-start gap-2">
                          <span className="text-cyan-500 mt-1">▹</span>
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (Mobile Preview) */}
          <div className="lg:col-span-5 xl:col-span-4 flex justify-center lg:sticky lg:top-24">
            <PreviewContainer url={mainLink} type="Mobile" images={project.images} />
          </div>

        </motion.div>
      </div>
    </div>
  );
}
