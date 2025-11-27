
export interface Author {
  name: string;
  initial: string;
  color: string;
}

export interface TagGroup {
  category: string;
  tags: string[];
}

export interface KeyValue {
  label: string;
  value: string;
}

export interface TableRow {
  col1: string; // e.g. Measure
  col2: string; // e.g. Indication
  col3: string; // e.g. Method
  tag: string;  // e.g. Result (Positive/Negative)
  tagType: 'success' | 'danger' | 'neutral';
}

export interface SectionData {
  id: string;
  title: string;
  type: 'tags' | 'key-value' | 'table' | 'list';
  content: any; // Dynamic based on type
}

export interface AIPoint {
  id: number;
  title: string;
  content: string;
}

export interface Figure {
  id: string;
  label: string;
  placeholderColor: string;
}

export interface Organization {
  id: string;
  acronym: string;
  name: string;
}

export interface RelatedArticle {
  id: string;
  type: string;
  typeColor: string; // Tailwind text color class
  journal: string;
  title: string;
  summary: string;
}
