# Specs

| Parameter | Value |
|---|---|
| Width | 8 HP (40.3 mm) |
| Depth | 40 mm |
| Current draw (V2/V3) | 40 mA (+12 V) / 10 mA (−12 V) |
| Core chip | CD4046 PLL |
| VCO type | Linear CV response, rectangle output |
| VCO range | 3 positions (low / mid / high), Offset knob for fine base frequency |
| Phase comparators | 3 types (PC1 XOR, PC2 RS flip-flop, PC3 digital memory network) |
| Lock indicator | LED (PC2 only) |
| LPF | Manual frequency control, DC-coupled |
| Inputs | IN 1 (PC In 1, normalled to VCO RECT OUT), IN 2 (Signal In, Zener-protected), VCO CV |
| Outputs | VCO RECT OUT, PC OUT, LPF OUT |
| Normalization | LPF OUT → VCO CV; VCO RECT OUT → IN 1 (both breakable) |
| Jumpers JP3/JP4 | DC/AC coupling for IN 1 and IN 2 respectively |
| IN 2 protection | 1 kΩ series + 5 V Zener (may clip signal used elsewhere — buffer recommended) |
| Manufacturer | Doepfer |
