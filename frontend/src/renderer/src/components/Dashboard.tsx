import LogStore from "./LogStore"
import SearchPanel from "./search-panel"

interface DashboardProps {
  useCase: string
}

export default function Main({ useCase }: DashboardProps) {
  return (
    <div className="flex flex-col h-screen min-w-screen bg-black">
      {/* Header Bar */}
      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden w-full">
        {/* Dashboard */}
        <LogStore />
        {/* Right Panel */}
        <div className="flex-1 flex flex-col py-4 px-2 text-white">
          {/* Top Half - Search Panel */}
          <div className="h-[90vh] mb-4 rounded-lg border border-zinc-800 bg-zinc-900 p-4 overflow-y-auto">
            <SearchPanel />
          </div>
          {/* Bottom Half */}
          {/* Enhanced Use Case Label */}
          <div className="h-16 flex-shrink-0 rounded-lg border border-indigo-900/20 bg-gradient-to-r from-zinc-900 via-indigo-950 to-zinc-900 p-4 shadow-lg relative overflow-hidden group">
            {/* Subtle animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Content container with flex layout */}
            <div className="relative flex items-center space-x-2 h-full">
              {/* Label */}
              <span className="font-medium text-indigo-200/80">Real-Time Analysis:</span>
              
              {/* Use Case Value */}
              <span className="font-semibold text-white bg-indigo-500/10 px-3 py-1 rounded-md">
                {useCase}
              </span>
            </div>
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
