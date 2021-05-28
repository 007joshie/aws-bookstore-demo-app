import os,sys
lineSearch = "//Name: Josh Boag, ID: 1500375"
exc = set(['node_modules']) 
for root, dirs, files in os.walk('../../aws-bookstore-demo-app'): 
    dirs[:] = [file for file in dirs if file not in exc]
    for f in files:
        if(f.endswith(".ts")):
            f = os.path.join(root, f) 
            with open(f, 'r') as reader:
                s = reader.readline()
                if(s.strip() == lineSearch):
                    reader.close()
                    continue
                else:
                    exit(1)

exit(0)
