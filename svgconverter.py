import subprocess

# Define input and output file paths
input_path = '/public/logo.png'
output_path = '/public/logo.svg'

# Convert PNG to PBM using ImageMagick
subprocess.call(['convert', input_path, 'pbm:-'])

# Trace bitmap using Potrace
subprocess.call(['potrace', '-b', 'svg', '-o', output_path, 'pbm:-'])

print(f'Successfully converted {input_path} to {output_path}')