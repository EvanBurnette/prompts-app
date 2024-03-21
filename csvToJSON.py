import csv
import json

# Assuming 'prompts.csv' is your file name
csv_file = 'prompts.csv'
json_file = 'prompts.json'

# Initialize a dictionary to hold the data
columns = None

# Read the CSV and fill the dictionary
with open(csv_file, mode='r', encoding='utf-8') as file:
    reader = csv.reader(file)
    headers = next(reader)
    columns = {header: [] for header in headers}
    for row in reader:
        for header, value in zip(headers, row):
            if value == "": continue
            columns[header].append(value)

# Convert the dictionary to a JSON string and save to a file
with open(json_file, mode='w', encoding='utf-8') as file:
    json.dump(columns, file, indent=2)
