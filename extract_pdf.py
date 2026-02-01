import PyPDF2
import json
import re

# Extract text from PDF
pdf_path = "/Users/a8982/Desktop/quran.pdf"
text = ""

try:
    with open(pdf_path, 'rb') as file:
        pdf_reader = PyPDF2.PdfReader(file)
        print(f"Total pages: {len(pdf_reader.pages)}")
        
        for page_num in range(len(pdf_reader.pages)):
            page = pdf_reader.pages[page_num]
            text += page.extract_text() + "\n"
    
    # Save extracted text for inspection
    with open('/Users/a8982/Desktop/quran_extracted.txt', 'w', encoding='utf-8') as f:
        f.write(text)
    
    print("Text extracted successfully!")
    print("\n--- First 500 characters ---")
    print(text[:500])
    
except Exception as e:
    print(f"Error: {e}")
