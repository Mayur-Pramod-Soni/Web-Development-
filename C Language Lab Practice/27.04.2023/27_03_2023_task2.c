
// w a p to check the given no is divisable by 2 or 3 both or not 

#include <stdio.h>
void main()
{
    int n, i=1;

    printf("Enter a No.");
    scanf("%d",&n);

    if(n%2==0 && n%3==0)
    {
        printf("True");
    }
    else
    {
        printf("False");
    }
}
   