export const getBgColor = variant => {
    switch (variant) {
        case 'Medium':
          return "rgba(226, 163, 0, 1)";
        case 'Важлива':
          return "rgba(226, 163, 0, 1)";
        case "Hight":
          return "rgba(255, 43, 119, 1)";
        case "Середня":
          return "rgba(255, 43, 119, 1)";
        case "Low":
          return "rgba(107, 212, 117, 1)"; 
        case "Низька":
          return "rgba(107, 212, 117, 1)";   
        default:
          throw new Error(`Unsupported variant prop value - ${variant}`);
    }
};