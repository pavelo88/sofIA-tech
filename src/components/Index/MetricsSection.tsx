import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { translations } from '../../translations';

interface MetricsSectionProps {
  lang: 'es' | 'en';
}

export default function MetricsSection({ lang }: MetricsSectionProps) {
  const chartRef = useRef<HTMLDivElement>(null);
  const t = translations[lang].metrics;

  useEffect(() => {
    let mounted = true;

    const initChart = async () => {
      try {
        const Plotly = await import('plotly.js-dist-min');
        if (!mounted || !chartRef.current) return;

        const quarters = ['Q1 22', 'Q2 22', 'Q3 22', 'Q4 22', 'Q1 23', 'Q2 23', 'Q3 23', 'Q4 23', 'Q1 24', 'Q2 24', 'Q3 24', 'Q4 24'];
        const efficiency = [12, 18, 24, 31, 38, 47, 54, 63, 72, 81, 89, 98];
        const revenue = [8, 11, 15, 20, 27, 35, 42, 52, 61, 70, 78, 87];

        type PlotlyType = typeof import('plotly.js-dist-min');
        type PlotlyData = Parameters<PlotlyType['newPlot']>[1][number];
        type PlotlyLayout = Parameters<PlotlyType['newPlot']>[2];
        type PlotlyConfig = Parameters<PlotlyType['newPlot']>[3];

        const data: PlotlyData[] = [
          {
            type: 'scatter',
            mode: 'lines',
            name: lang === 'es' ? 'Ganancia Eficiencia' : 'Efficiency Gain',
            x: quarters,
            y: efficiency,
            fill: 'tozeroy',
            fillcolor: 'rgba(59,130,246,0.04)',
            line: { color: '#3b82f6', width: 2, shape: 'spline' },
            hovertemplate: lang === 'es' ? '%{y}% eficiencia<extra></extra>' : '%{y}% efficiency<extra></extra>'
          },
          {
            type: 'scatter',
            mode: 'lines',
            name: lang === 'es' ? 'Crecimiento Ingresos' : 'Revenue Growth',
            x: quarters,
            y: revenue,
            fill: 'tozeroy',
            fillcolor: 'rgba(217,164,65,0.03)',
            line: { color: '#d9a441', width: 2, shape: 'spline' },
            hovertemplate: lang === 'es' ? '%{y}% ingresos<extra></extra>' : '%{y}% revenue<extra></extra>'
          }
        ];

        const layout: Partial<PlotlyLayout> = {
          paper_bgcolor: 'rgba(0,0,0,0)',
          plot_bgcolor: 'rgba(0,0,0,0)',
          font: { family: 'Space Mono, monospace', color: 'rgba(255,255,255,0.3)', size: 9 },
          margin: { t: 10, r: 10, b: 30, l: 40 },
          xaxis: {
            showgrid: true,
            gridcolor: 'rgba(255,255,255,0.03)',
            tickfont: { size: 9, color: 'rgba(255,255,255,0.3)' },
            linecolor: 'rgba(255,255,255,0.05)',
          },
          yaxis: {
            showgrid: true,
            gridcolor: 'rgba(255,255,255,0.03)',
            tickfont: { size: 9, color: 'rgba(255,255,255,0.3)' },
            ticksuffix: '%',
            linecolor: 'rgba(255,255,255,0.05)',
            zeroline: false,
          },
          legend: {
            font: { color: 'rgba(255,255,255,0.5)', size: 10 },
            bgcolor: 'rgba(0,0,0,0)',
            bordercolor: 'rgba(255,255,255,0)',
            orientation: 'h',
            y: -0.2
          },
          hoverlabel: {
            bgcolor: '#16202c',
            bordercolor: 'rgba(255,255,255,0.1)',
            font: { family: 'Space Mono', color: '#fff', size: 10 }
          }
        };

        const config: Partial<PlotlyConfig> = { responsive: true, displayModeBar: false, displaylogo: false };

        Plotly.newPlot(chartRef.current, data, layout, config);
      } catch {
        if (chartRef.current) {
          chartRef.current.innerHTML = '<div class="flex items-center justify-center h-full text-white/20 text-xs font-mono">Chart unavailable</div>';
        }
      }
    };

    initChart();

    return () => {
      mounted = false;
      if (chartRef.current) {
        import('plotly.js-dist-min').then(Plotly => {
          if (chartRef.current) Plotly.purge(chartRef.current);
        }).catch(() => {});
      }
    };
  }, [lang]);

  return (
    <section
      className="py-12 sm:py-24 relative overflow-hidden border-b border-white/10"
      id="metrics"
      style={{ background: '#10151c' }}
    >
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-6 border-b border-white/10 sm:gap-6 sm:mb-16 sm:pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 border border-white/10 bg-white/5 mb-4">
              <FontAwesomeIcon icon={faGlobe} className="text-xs text-brass" />
              <span className="font-mono text-[10px] font-500 text-brass tracking-widest uppercase">{t.tag}</span>
            </div>
            <h2 className="font-heading font-700 text-3xl sm:text-5xl text-white tracking-tight leading-none uppercase">
              {t.title} <span className="font-serif italic font-light text-brass text-3xl sm:text-5xl normal-case">{t.titleItalic}</span>
            </h2>
          </div>
          <p className="font-body text-xs sm:text-sm text-white/50 max-w-sm md:text-right leading-relaxed">
            {t.desc}
          </p>
        </div>

        {/* Metrics Grid (Borders via gap-px) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 mb-6 sm:mb-12">
          {[
            { label: t.block1, val: '140', suffix: '+' },
            { label: t.block2, val: '$2.4', suffix: 'B', color: 'text-brass' },
            { label: t.block3, val: '18', suffix: '' },
            { label: t.block4, val: '98', suffix: '%', color: 'text-blue-400' }
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-[#10151c] p-6 sm:p-8 text-center sm:text-left flex flex-col justify-between min-h-[140px] sm:min-h-[160px]"
            >
              <span className="font-mono text-[9px] uppercase tracking-widest text-white/40 mb-4">
                // DATA BLOCK 0{idx + 1}
              </span>
              <div>
                <p className="font-heading font-700 text-4xl sm:text-5xl xl:text-6xl text-white mb-2 leading-none">
                  {stat.val}<span className={stat.color || "text-cyan"}>{stat.suffix}</span>
                </p>
                <p className="font-mono text-[10px] text-white/50 uppercase tracking-widest">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Chart Card */}
        <div
          className="border border-white/10 bg-[#10151c] p-6 sm:p-8"
        >
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 pb-6 border-b border-white/5">
            <div>
              <h3 className="font-heading font-700 text-lg uppercase tracking-tight text-white mb-1">
                {t.chartTitle}
              </h3>
              <p className="font-mono text-[10px] text-white/40">
                {t.chartDesc}
              </p>
            </div>
            
            <div className="flex gap-4 font-mono text-[10px]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-blue-500 border border-white/10"></span>
                <span className="text-white/60">{t.efficiency}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-brass border border-white/10"></span>
                <span className="text-white/60">{t.revenue}</span>
              </div>
            </div>
          </div>
          
          <div ref={chartRef} className="h-[260px] sm:h-[320px] w-full"></div>
        </div>

      </div>
    </section>
  );
}
