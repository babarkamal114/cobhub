import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import React, { useState } from 'react';

import { TrackTabsProps } from 'types';
import { tabListStyles, tabStyles } from 'variants';

function TrackTabs<T>({ categories, renderItem, shape = 'smooth', aria = {} }: TrackTabsProps<T>) {
  const [computedCategories] = useState(categories);

  return (
    <div className="relative w-full">
      <TabGroup as="div" aria-label={aria.label || 'Content Tabs'}>
        <TabList className={tabListStyles({ shape })}>
          {Object.keys(computedCategories).map(category => (
            <Tab
              key={category}
              className={({ selected }) => tabStyles({ shape, selected })}
              aria-controls={`panel-${category.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {category}
            </Tab>
          ))}
        </TabList>
        <TabPanels className="mt-2">
          {Object.entries(computedCategories).map(([category, items], idx) => (
            <TabPanel
              key={idx}
              id={`panel-${category.toLowerCase().replace(/\s+/g, '-')}`}
              className="py-3 rounded-lg"
              tabIndex={0}
            >
              {items?.map((item, index) => <>{renderItem(item, index)}</>)}
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </div>
  );
}

TrackTabs.displayName = 'TrackTabs';

export { TrackTabs };
