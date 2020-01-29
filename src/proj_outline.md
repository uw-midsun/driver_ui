Hello

Required components for the driver display:

1. Current speed (toggleable between miles and kilometers)
2. Current time
3. Range bar with remaining distance and units (changes color with how much range remains)
4. Solar Charge and Plug Charge indicators (also changes color with range bar)
5. Drive state indicator (park, neutral, reverse, drive)
6. Turn signals
7. Cruise control indicator with set speed
8. Midnight Sun logo splash screen

Props needed in the DriverDisplay component
All values will be defaultly stored in Metric units and converted within the component to imperial if needed

1. Current speed (in km/h)
2. Current drive state (p, n, r, d)
3. Current turn signal state (l, r, both)
4. Current units in use (km, mi)
5. Battery charge remaining (in km)
6. Solar charge (on, off)
7. Plug charge (on, off)
8. Current time (string)
9. Cruise Control (on, off)
10. Cruise Control Speed (in km/h)

Props needed for SpeedDisplay component:

1. current_speed
2. units

Props needed for TimeDisplay
