export interface ProcessContextType {
  processes: string[];
  setProcess: React.Dispatch<React.SetStateAction<string>>;
  process: string;
}
