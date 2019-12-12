import re

def main():
    tel = input("please input telphone:")
    print(tel)
    ret = re.match(r"^1[356789]\d{9}$",tel)

    if ret:
        print("success")
    else:
        print("false")

if __name__ == "__main__":
    main()
