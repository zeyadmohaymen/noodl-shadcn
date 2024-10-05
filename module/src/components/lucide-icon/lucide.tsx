import React, { Suspense } from 'react';
import { LucideIcon, AlertCircle } from 'lucide-react';

// Function to dynamically import an icon component based on the iconName
const importIcon = (iconName: string): React.LazyExoticComponent<LucideIcon> => {
    return React.lazy(() =>
      import(`lucide-react`).then((module) => {
        // Check if the icon exists in the module
        const IconComponent = module[iconName as keyof typeof module] as LucideIcon;
        
        // If icon does not exist, return the default icon
        if (!IconComponent) {
          console.warn(`Icon "${iconName}" not found, using default icon.`);
          return { default: AlertCircle }; // Return the default icon component
        }
        
        // Return the requested icon component
        return { default: IconComponent };
      })
    );
  };

interface LucideIconProps {
  iconName: string; // The name of the icon to render
  size?: number; // Size of the icon
  color?: string; // Color of the icon
//   strokeWidth?: number; // Stroke width for the icon
}

// Component to render the dynamically imported icon
export const DynamicLucideIcon: React.FC<LucideIconProps> = ({
  iconName,
  size = 24,
  color = 'currentColor',
//   strokeWidth = 2,
  ...props
}) => {
  const IconComponent = importIcon(iconName);
 

  return (
    <Suspense fallback={<div/>}>
      <IconComponent size={size} color={color} {...props} />
        {/* <IconComponent {...props} /> */}
    </Suspense>
  );
};

